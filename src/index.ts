import mongoose from 'mongoose';

const start = async () => {
	await mongoose.connect('mongodb://root:root@10.1.0.229:27017/tutorial_mongodb?authSource=admin');
};

start();