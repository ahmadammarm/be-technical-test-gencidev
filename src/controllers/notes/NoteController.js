import prisma from '../../lib/prisma.js';

const GetAllNotesController = async (request, response, next) => {
    try {
        const notes = await prisma.notes.findMany();
        response.status(200).json({ code: 200, success: true, message: 'Notes retrieved successfully', notes });
    } catch (error) {
        next(error);
    }
};

const CreateNoteController = async (request, response, next) => {
    try {
        const { title, content } = request.body;
        const note = await prisma.notes.create({
            data: { title, content },
        });
        response.status(201).json({ code: 201, success: true, message: 'Note created successfully', note });
    } catch (error) {
        next(error);
    }
};

const GetNoteById = async (request, response, next) => {
    try {
        const { id } = request.params;
        const note = await prisma.notes.findUnique({
            where: { id },
        });
        if (!note) {
            return response.status(404).json({ code: 404, success: false, message: 'Note not found' });
        }
        response.status(200).json({ code: 200, success: true, message: "Note retrieved successfully", note });
    } catch (error) {
        next(error);
    }
};

const EditNoteById = async (request, response, next) => {
    try {
        const { id } = request.params;
        const { title, content } = request.body;

        const existingNote = await prisma.notes.findUnique({ where: { id } });
        if (!existingNote) {
            return response.status(404).json({ code: 404, success: false, message: 'Note not found' });
        }

        const note = await prisma.notes.update({
            where: { id },
            data: { title, content },
        });
        response.status(200).json({ code: 200, success: true, message: 'Note updated successfully', note });
    } catch (error) {
        next(error);
    }
};

const DeleteNoteById = async (request, response, next) => {
    try {
        const { id } = request.params;

        const note = await prisma.notes.findUnique({ where: { id } });
        if (!note) {
            return response.status(404).json({ code: 404, success: false, message: 'Note not found' });
        }

        await prisma.notes.delete({
            where: { id },
        });
        response.status(204).send();
    } catch (error) {
        next(error);
    }
};

export {
    CreateNoteController,
    GetAllNotesController,
    GetNoteById,
    EditNoteById,
    DeleteNoteById,
};
