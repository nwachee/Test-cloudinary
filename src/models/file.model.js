import { Schema, model } from 'mongoose';

const fileSchema = new Schema ({
    link: {
        type : String,
        trim: true,
		required: [true, 'Must provide filename']
    }
}, 
    {
    timestamps: true
  }
);

const File = model('File', fileSchema)

export default File;
