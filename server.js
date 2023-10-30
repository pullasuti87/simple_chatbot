import express from 'express';

const app = express();
const port = 3000;

// no folder structure
app.use(express.static('.'));
// parses incoming json requests 
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running port ${port}`);
});

const responses = {
  hello: 'Hello, Gorgeous!',
  'who are you': 'You know exactly who I am. Say my name!',
  heisenberg: 'You\'re goddamn right!',
  'how are you': 'I am just a chatbot, but thanks for asking!',
  bye: 'Seeya, don\'t wanna be ya!',
};

app.post('/', (req, res) => {
  const message = req.body.message;
  const response = responses[message.toLowerCase().trim()];
  if (response) {
    res.json({ message: response });
  } else {
    res.json({ message: 'What are you mumbling about?' });
  }
});
