import { Schema, model } from 'mongoose';

const fileSchema = new Schema ({
link: {
type : String,
}
}, 
    {
    timestamps: true
  }
);

const File = model('File', fileSchema)

export default File;
