import express from "express";
import isAuthenticated from "../../middleware/isAuthenticated.js";
import { GetAllNotesController, CreateNoteController, GetNoteById, EditNoteById, DeleteNoteById } from "../../controllers/notes/NoteController.js";
import { createNoteValidator, updateNoteValidator } from "../../validators/notes.js";
import validate from "../../validators/validate.js";

const notesRoute = express.Router();

notesRoute.get("/notes", isAuthenticated, GetAllNotesController);
notesRoute.post("/notes", isAuthenticated, createNoteValidator, validate, CreateNoteController);
notesRoute.get("/notes/:id", isAuthenticated, GetNoteById);
notesRoute.put("/notes/:id", isAuthenticated, updateNoteValidator, validate, EditNoteById);
notesRoute.delete("/notes/:id", isAuthenticated, DeleteNoteById);

export default notesRoute;
