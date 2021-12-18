import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Body, BodyType } from './types';
import { Reaction } from 'fb-post-reaction';

const app = express();
app.use(bodyParser.json());

app.post('/', async (req, res) => {
	const data: BodyType[] = [].concat(req.body);
	if (data.some(e => !Body.test(e))) return res.status(400).send();

	let promises: Promise<{ success: boolean; error?: string }>[] = [];

	data.forEach(async element => promises.push(new Reaction(element.username, element.password, element.post).react(element.reaction)));

	return res.status(200).send((await Promise.all(promises)).map((e, i) => ({ ...e, username: data[i] })));
});

const port = process.env.POST || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
