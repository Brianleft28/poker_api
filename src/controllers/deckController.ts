import { Request, Response } from "express";
import axios from "axios";

// This function will be used to get a new deck of cards
export const getDeck = async (req: Request, res: Response) => {
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
// This function will be used to shuffle a deck of cards
export const shufleDeck = async (req: Request, res: Response) => {
  const { deckId } = req.params;
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=true`;
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
// This function will be used to get a deck of cards in the correct order
export const getOrderDeck = async (req: Request, res: Response) => {
  const url = "https://deckofcardsapi.com/api/deck/new/";
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
// This function will be used to return the cards of a deck
export const returnCards = async (req: Request, res: Response) => {
  const { deckId } = req.params;
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/return/ `;
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
// This function will be used to draw a card from a deck
export const getCard = async (req: Request, res: Response) => {
  const { drawCards, deckId } = req.params;
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawCards}`;
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const reshuffleDeck = async (req: Request, res: Response) => {
  const { deckId } = req.params;
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=true`;
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
