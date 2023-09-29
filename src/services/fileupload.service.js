import fileModel from '../models/file.model';

export const fileService = async (fileData) => {
        return await fileModel.create(fileData)
    }

