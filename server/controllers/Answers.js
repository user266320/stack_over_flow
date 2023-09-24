
import mongoose from "mongoose";
import Questions from "../models/Questions.js";

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAnswers, answerBody, userAnswered,userId } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  updateNoOfQuestions(_id, noOfAnswers);
  try {
    const updatedQuestion = await Questions.findByIdAndUpdate(_id, { $addToSet: { answer: [{ answerBody, userAnswered, userId }] }});
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json("error in updating");
  }
};

const updateNoOfQuestions = async (_id, noOfAnswers) => {
  try {
    await Questions.findByIdAndUpdate(_id, {
      $set: { noOfAnswers: noOfAnswers },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = async (req, res) => {
  const {id:_id}=req.params;
  const {answerId,noOfAnswers} = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }
   
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send("Answer unavailable...");
  }
  updateNoOfQuestions(_id,noOfAnswers)
  try {
    await Questions.updateOne(
      {_id},
      {$pull:{'answer':{_id:answerId}}}
    
      
    )
    res.status(200).send({message:"successfully deleted..."});
  } catch (error) {
    res.status(400).json(error);
  }
}



export const voteQuestion = async (req, res) => {
  const {id:_id}=req.params;
  const {value,userId} = req.body;

  
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question unavailable...");
  }


  try {
    
    const question = await Questions.findById(_id)
    const upIndex = question.upVote.findIndex((id)=> id === String(userId))
    const downIndex = question.downVote.findIndex((id)=> id === String(userId))
   
   
    
    if(value === 'upVote'){
      if(downIndex !== -1){
        question.downVote = question.downVote.filter((id)=> id !== String(userId))

      }
      if(upIndex === -1 ){
        question.upVote.push(userId)
      }else{
        question.upVote = question.upVote.filter((id)=>id !== String(userId) )
      }
    }
    else if (value === 'downVote'){

      if(upIndex !== -1){
        question.upVote = question.upVote.filter((id)=> id !== String(userId))

      }
      if(downIndex === -1 ){
        question.downVote.push(userId)
      }else{
        question.downVote = question.downVote.filter((id)=>id !== String(userId) )
      }
    }

    await Questions.findByIdAndUpdate(_id,question)
    res.status(200).json({message:"voted successfully"})
  } catch (error) {
    res.status(404).json({message:"id not founded"});
  }
}