const { getLanguageById, submitBatch } = require("../utils/problemUtility");

const createProblem = async (req, res) => {
  const {
    title,
    description,
    difficulty,
    tags,
    visibleTestCases,
    hiddenTestCases,
    startCode,
    referenceSolution,
    problemCreator,
  } = req.body;

  try {
    for (const { language, completeCode } of referenceSolution) {
      // judge0 format
      // source_code:
      // language_id:
      // stdin:
      // expectedOutput:

      // i have language in my db(problem schema) i will get language id
      const languageId = getLanguageById(language);

      // Now I am creating Batch submission
      // first testcase and code , second testcase and code , Third testcase and code
      const submissions = visibleTestCases.map((input, output) => ({
        source_code: completeCode,
        language_id: languageId,
        stdin: input,
        expected_output: output,
      }));

      const submitResult = await submitBatch(submissions);
    }
  } catch (err) {}
};

// const submissions = [
//     {
//       "language_id": 46,
//       "source_code": "echo hello from Bash",
//       stdin:23,
//       expected_output:43,
//     },
//     {
//       "language_id": 123456789,
//       "source_code": "print(\"hello from Python\")"
//     },
//     {
//       "language_id": 72,
//       "source_code": ""
//     }
//   ]
