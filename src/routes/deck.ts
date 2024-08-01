import { Router } from "express";
import {
  getCard,
  getDeck,
  getOrderDeck,
  reshuffleDeck,
  returnCards,
  shufleDeck,
} from "../controllers/deckController";

const router = Router();
// This route will be used to get a new deck of cards
router.get("/", getDeck);
// This route will be usted to reshuffle a deck of cards
router.get("/reshufle/:deckId", reshuffleDeck);
// This route will be used to shuffle a deck of cards
router.get("/shufle/:deckId", shufleDeck);
// This route will be used to get a deck of cards in the correct order
router.get("/correctOrder", getOrderDeck);
// This route will be used to return the cards of a deck
router.get("/return/:deckId", returnCards);
// This route will be used to draw a card from a deck
router.get("/draw/:deckId/:drawCards", getCard);
// Export the router
export default router;
