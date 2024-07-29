import { Router } from "express";
import {
  getCard,
  getDeck,
  getOrderDeck,
  returnCards,
  shufleDeck,
} from "../controllers/deckController";

const router = Router();
// This route will be used to get a new deck of cards
router.get("/", getDeck);
// This route will be used to shuffle a deck of cards
router.get("/shufle/:deckId", shufleDeck);
// This route will be used to get a deck of cards in the correct order
router.get("/correctOrder", getOrderDeck);
// This route will be used to return the cards of a deck
router.get("/return/:deckId", returnCards);

router.get("/draw/:deckId/:drawCards", getCard);
export default router;
