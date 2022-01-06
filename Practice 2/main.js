function Caloculater(exp) {
  const stack = [];

  const expArray = exp.split(" ");
  for (let i = 0; i < expArray.length; i++) {
    switch (expArray[i]) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        stack.push(stack.pop() - stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        stack.push(stack.pop() / stack.pop());
        break;
      case "DUP":
        stack.push(stack[i - 1]);
        break;
      case "POP":
        stack.pop(i - 1);
        break;
      default:
        stack.push(parseInt(expArray[i]));
    }
  }
  return stack.pop();
}

console.log(Caloculater("x y +"));
