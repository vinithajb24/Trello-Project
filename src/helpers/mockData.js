import { randomId } from "./utils";

const getCard = (content) => ({
  id: randomId(),
  content,
});
export default [
  {
    id: randomId(),
    name: "To do",
    cards: [getCard("Card Popup"), getCard("Card UI")],
  },
  {
    id: randomId(),
    name: "In progress",
    cards: [getCard("Board Headers"), getCard("Undo and Redo")],
  },
  {
    id: randomId(),
    name: "Done",
    cards: [
      getCard("Creating a Trello project Document"),
      getCard("project setup and folder"),
      getCard("Login page UI Pending"),
      getCard("Board listing"),
    ],
  },
];
