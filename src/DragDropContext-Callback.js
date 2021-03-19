/**
 * DragDropContextに渡せるコールバックの中身
 * 1. onDragStart
 * 2. onDragUpdate
 * 3. onDragEnd
 *
 * ただし、onDragStartやonDragUpdateを使ってスタイルを変更するのではなく、
 * スナップショットを使ってスタイルを当てていくことをする（方が多い？的な）
 */

// onDragStart
const start = {
  draggableId: 'task-1',
  type: 'TYPE',
  source: {
    droppableId: 'Todo',
    index: 0,
  },
};

// onDragUpdate
const update = {
  ...start,
  destination: {
    droppableId: 'Todo',
    index: 1,
  },
};

// onDragEnd
const result = {
  ...update,
  reason: 'DROP',
};
