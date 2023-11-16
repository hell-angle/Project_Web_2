import { Configuration, OpenAIApi } from "openai";

const openAIConfig = new Configuration({
  apiKey: "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"
});

const openapi = new OpenAIApi(openAIConfig);

export const chatCompletion = async (req, res) => {
  try {
    const { prompt } = req.body;

    const answer = await openapi.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 3000
    });

    const text = answer.data.choices[0].text;

    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};