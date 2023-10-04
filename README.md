# Week 7 Day 2 Assignment: Delving into React Hooks and State Management

Welcome back INFO-I400/590 students! In this assignments, we'll immerse ourselves in one of the most foundational concepts of modern React development: Hooks, specifically the `useState` hook. Through this, we'll comprehend the underlying model of passing data from parents to children, the difference between state and props, and get hands-on experience with React's dynamic nature. So, let's begin our exploration!

## Prerequisites

- Prior understanding of JSX, React Native components, and props.
- A working React Native environment from previous assignments.

## Concepts Covered

- Introduction to React Hooks.
- Difference between state and props.
- Passing data top-down from parent to child components.
- Dynamic UI updates with `useState`.

---

## Assignment Instructions

### Part 1: Theoretical Understanding

#### Task

1. **Understanding State and Props**
   - Record a VoiceThread explaining:
     - The difference between state and props.
     - Scenarios in which each should be used.
     - The advantages and limitations of both.

#### Evaluation Criteria for Part 1

- **Clarity**: Your explanations should be coherent, succinct, and straightforward.
- **Depth of Understanding**: Highlight the core differences and purposes of state and props.

### Part 2: Implementing `useState`

#### Task

1. **Award Bonus Point**

   - Extend your gradebook entries from previous assignments. For each student entry, add a button labeled "Award Bonus Point".
   - Upon pressing this button, the respective student's score should increase by 1. This increment is essentially a "bonus point" and should not alter the original gradebook.
   - Implement this feature using the `useState` hook to store the `bonusPoints` state for each student entry.

2. **Total Bonus Points Notification**
   - Have the gradebook maintain a `totalBonusPoints` state.
   - Every time a student is awarded a bonus point, increment this `totalBonusPoints` counter.
   - If `totalBonusPoints` reaches 5, display a `Text` component that says something rewarding, such as "Candy for everyone!" for example.
   - If `totalBonusPoints` reaches 10, switch the message to something else even more rewarding, such as "Lambos for everyone!" for example.

#### Evaluation Criteria for Part 2

- **Implementation**: The "Award Bonus Point" button should function correctly and modify the state as intended.
- **Use of `useState`**: The state should be managed effectively using the `useState` hook.
- **Dynamic UI Updates**: The UI should reflect the changes in state seamlessly.

---

## Overall Evaluation Criteria

- **Code Quality**: Your code should be clean, organized, and well-commented.
- **Functionality**: The application should run without errors and perform the desired tasks.
- **Understanding**: Your submission should clearly demonstrate your grasp on React Hooks, state management, and the distinction between state and props.

## Submission

Push your code to your respective repositories for evaluation. Additionally, make sure to upload your VoiceThread for Part 1. Be sure to engage with us in the Discord or in office hours and ask questions to ensure you understand the concepts taught!

Best of luck on this assignment!
