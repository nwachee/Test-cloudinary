import fileModel from '../models/file.model.js';

export const fileService = async (input) => {return await fileModel.create(input)}

export const fetchLinks = async (input) => {return await fileModel.find(input)}

export const  deleteLink = async(id) => {return await fileModel.findByIdAndDelete(id) }