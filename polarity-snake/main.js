title = "POLARITY SNAKE";

description = `
[Arrows/WASD] Steer
[Space/Tap] Switch
`;

characters = [];

options = {
  viewSize: { x: 100, y: 100 },
  theme: "simple",
  colorPalette: [
    [0, 0, 0],
    [255, 255, 255],
    [62, 10, 113],
    [11, 135, 114],
    [248, 136, 0],
    [240, 171, 0],
    [77, 77, 77],
    [222, 222, 222],
    [116, 116, 116],
  ],
  isReplayEnabled: false,
  isDrawingScoreFront: true,
  isShowingScore: false,
  isSoundEnabled: false,
};

const COLS = 22;
const ROWS = 16;
const CELL = 4;
const FIELD_X = 6;
const FIELD_Y = 22;
const FOODS_PER_LEVEL = 2;
const DIRECTIONS = {
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
};

/** @type {{x: number, y: number}[]} */
let snake;
/** @type {{x: number, y: number, polarity: number}} */
let food;
/** @type {{x: number, y: number, length: number, horizontal: boolean, polarity: number, id: number}[]} */
let walls;
/** @type {{x: number, y: number}} */
let direction;
/** @type {{x: number, y: number}} */
let nextDirection;
/** @type {Set<number>} */
let grazing;
let polarity;
let level;
let foodCount;
let streak;
let stepProgress;
let pendingGrowth;

function update() {
  if (!ticks) {
    resetGame();
  }
  readInput();
  drawField();
  drawFood();
  drawWalls();
  drawSnake();
  drawHud();
  stepProgress += getSpeed();
  if (stepProgress >= 1) {
    stepProgress -= 1;
    moveSnake();
  }
}

function resetGame() {
  snake = times(5, (i) => ({ x: 11 - i, y: 8 }));
  walls = [];
  direction = { ...DIRECTIONS.right };
  nextDirection = { ...direction };
  grazing = new Set();
  polarity = 1;
  level = 1;
  foodCount = 0;
  streak = 0;
  stepProgress = 0;
  pendingGrowth = 0;
  placeFood();
}

function readInput() {
  const code = keyboard.code;
  if (code.ArrowLeft.isJustPressed || code.KeyA.isJustPressed) {
    queueDirection(DIRECTIONS.left);
  }
  if (code.ArrowRight.isJustPressed || code.KeyD.isJustPressed) {
    queueDirection(DIRECTIONS.right);
  }
  if (code.ArrowUp.isJustPressed || code.KeyW.isJustPressed) {
    queueDirection(DIRECTIONS.up);
  }
  if (code.ArrowDown.isJustPressed || code.KeyS.isJustPressed) {
    queueDirection(DIRECTIONS.down);
  }
  if (code.Space.isJustPressed || pointer.isJustPressed) {
    polarity = 1 - polarity;
  }
}

function queueDirection(candidate) {
  if (candidate.x !== -direction.x || candidate.y !== -direction.y) {
    nextDirection = { ...candidate };
  }
}

function moveSnake() {
  direction = nextDirection;
  const head = snake[0];
  const next = { x: head.x + direction.x, y: head.y + direction.y };
  if (isOutside(next) || hitsSnake(next) || hitsOppositeWall(next)) {
    showGameOver();
    return;
  }
  snake.unshift(next);
  if (pendingGrowth > 0) {
    pendingGrowth--;
  } else {
    snake.pop();
  }
  if (next.x === food.x && next.y === food.y) {
    eatFood();
  }
  scoreGrazing(next);
}

function eatFood() {
  foodCount++;
  if (food.polarity === polarity) {
    streak++;
    pendingGrowth++;
    const points = 10 * getMultiplier();
    addScore(points, cellX(food.x), cellY(food.y));
  } else {
    streak = 0;
    if (snake.length === 1) {
      showGameOver();
      return;
    }
    snake.pop();
  }
  const nextLevel = floor(foodCount / FOODS_PER_LEVEL) + 1;
  if (nextLevel > level) {
    level = nextLevel;
    addWall();
  }
  placeFood();
}

function showGameOver() {
  color(5);
  end("GAME OVER");
}

function getSpeed() {
  const pieces = snake.length - 1;
  const levelSpeed = min((level - 1) * 0.008, 0.07);
  if (pieces === 0) {
    return 0.3 + levelSpeed;
  }
  if (pieces === 1) {
    return 0.25 + levelSpeed;
  }
  if (pieces === 2) {
    return 0.2 + levelSpeed;
  }
  const extraSlowdown = max(pieces - 4, 0) * 0.005;
  return max(0.075, 0.13 + levelSpeed - extraSlowdown);
}

function getMultiplier() {
  const pieces = snake.length - 1;
  const streakMultiplier = max(streak, 1);
  const extraMultiplier = 1 + max(pieces - 4, 0) * 0.25;
  const dangerMultiplier = pieces === 0 ? 5 : pieces === 1 ? 3 : pieces === 2 ? 2 : 1;
  return ceil(streakMultiplier * extraMultiplier * dangerMultiplier);
}

function scoreGrazing(head) {
  const nearby = new Set();
  walls.forEach((wall) => {
    if (wall.polarity !== polarity && distanceToWall(head, wall) === 1) {
      nearby.add(wall.id);
      if (!grazing.has(wall.id)) {
        const speedMultiplier = ceil(getSpeed() * 20);
        addScore(5 * speedMultiplier, cellX(head.x), cellY(head.y));
      }
    }
  });
  grazing = nearby;
}

function distanceToWall(pos, wall) {
  let distance = ROWS + COLS;
  times(wall.length, (i) => {
    const x = wall.x + (wall.horizontal ? i : 0);
    const y = wall.y + (wall.horizontal ? 0 : i);
    distance = min(distance, abs(pos.x - x) + abs(pos.y - y));
  });
  return distance;
}

function addWall() {
  times(80, () => {
    if (walls.length >= level - 1) {
      return;
    }
    const horizontal = rnd() < 0.5;
    const length = rndi(3, 7);
    const maxX = horizontal ? COLS - length : COLS - 1;
    const maxY = horizontal ? ROWS - 1 : ROWS - length;
    const wall = {
      x: rndi(1, maxX),
      y: rndi(1, maxY),
      length,
      horizontal,
      polarity: rndi(2),
      id: walls.length,
    };
    if (snake.some((part) => isWallCell(part, wall))) {
      return;
    }
    if (isWallCell(food, wall)) {
      return;
    }
    if (walls.some((existingWall) => wallsOverlap(wall, existingWall))) {
      return;
    }
    walls.push(wall);
  });
}

function wallsOverlap(firstWall, secondWall) {
  for (let i = 0; i < firstWall.length; i++) {
    const x = firstWall.x + (firstWall.horizontal ? i : 0);
    const y = firstWall.y + (firstWall.horizontal ? 0 : i);
    const pos = { x, y };
    if (isWallCell(pos, secondWall)) {
      return true;
    }
  }
  return false;
}

function placeFood() {
  times(200, () => {
    if (food && !isOccupied(food)) {
      return;
    }
    food = { x: rndi(COLS), y: rndi(ROWS), polarity: rndi(2) };
  });
}

function isOccupied(pos) {
  const onSnake = snake.some((part) => part.x === pos.x && part.y === pos.y);
  const onWall = walls.some((wall) => isWallCell(pos, wall));
  return onSnake || onWall;
}

function hitsSnake(pos) {
  const collisionLength = snake.length - (pendingGrowth > 0 ? 0 : 1);
  return snake.some((part, i) => i < collisionLength && part.x === pos.x && part.y === pos.y);
}

function hitsOppositeWall(pos) {
  return walls.some((wall) => wall.polarity !== polarity && isWallCell(pos, wall));
}

function isWallCell(pos, wall) {
  const offset = wall.horizontal ? pos.x - wall.x : pos.y - wall.y;
  const fixed = wall.horizontal ? pos.y === wall.y : pos.x === wall.x;
  return fixed && offset >= 0 && offset < wall.length;
}

function isOutside(pos) {
  return pos.x < 0 || pos.x >= COLS || pos.y < 0 || pos.y >= ROWS;
}

function drawField() {
  color(3);
  rect(FIELD_X - 2, FIELD_Y - 2, COLS * CELL + 4, 2);
  rect(FIELD_X - 2, FIELD_Y + ROWS * CELL, COLS * CELL + 4, 2);
  rect(FIELD_X - 2, FIELD_Y - 2, 2, ROWS * CELL + 4);
  rect(FIELD_X + COLS * CELL, FIELD_Y - 2, 2, ROWS * CELL + 4);
}

function drawWalls() {
  walls.forEach((wall) => {
    color(wall.polarity);
    times(wall.length, (i) => {
      const x = wall.x + (wall.horizontal ? i : 0);
      const y = wall.y + (wall.horizontal ? 0 : i);
      box(cellX(x), cellY(y), CELL - 0.6);
    });
    color(4);
    const startX = cellX(wall.x);
    const startY = cellY(wall.y);
    const endX = cellX(wall.x + (wall.horizontal ? wall.length - 1 : 0));
    const endY = cellY(wall.y + (wall.horizontal ? 0 : wall.length - 1));
    box(startX, startY, 1);
    box(endX, endY, 1);
  });
}

function drawFood() {
  const x = cellX(food.x);
  const y = cellY(food.y);
  color(4);
  box(x, y, CELL);
  color(food.polarity);
  const pattern = ["CEEEEC", "EECCEE", "ECCCCE", "ECCCCE", "EECCEE", "CEEEEC"];
  pattern.forEach((row, rowIndex) => {
    [...row].forEach((pixel, columnIndex) => {
      if (pixel === "C") {
        const pixelX = x + columnIndex - 2;
        const pixelY = y + rowIndex - 2;
        box(pixelX, pixelY, 1);
      }
    });
  });
}

function drawSnake() {
  color(polarity);
  snake.forEach((part, i) => {
    box(cellX(part.x), cellY(part.y), i === 0 ? CELL - 0.3 : CELL - 1);
  });
  color(4);
  const head = snake[0];
  box(cellX(head.x) + direction.x, cellY(head.y) + direction.y, 1.2);
}

function drawHud() {
  const pieces = snake.length - 1;
  color(1);
  text(`SCORE ${score}`, 4, 7, { isSmallText: true });
  color(4);
  text(`LEVEL ${level}`, 4, 14, { isSmallText: true });
  color(5);
  text(`x${getMultiplier()}`, 48, 14, { isSmallText: true });
  color(polarity);
  box(88, 8, 7);
  color(7);
  text(`${pieces}`, 78, 14, { isSmallText: true });
  color(3);
  const speedWidth = clamp(getSpeed() * 65, 5, 20);
  rect(69, 5, speedWidth, 2);
}

function cellX(x) {
  return FIELD_X + x * CELL + CELL / 2;
}

function cellY(y) {
  return FIELD_Y + y * CELL + CELL / 2;
}
