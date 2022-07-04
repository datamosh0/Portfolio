import blogImage1 from "../assets/images/blogs/image1.png";
import blogImage2 from "../assets/images/blogs/2image1.png";
const posts = [
  {
    id: 2,
    title: "Use React to make Tic-Tac-Toe in 5 steps",
    slug: "use-react-to-make-tic-tac-toe-in-5-steps",
    postedOn: "May 5th, 2022",
    author: "Dawson Contreras",
    featured: true,
    blogImage: blogImage2,
    linkSrc:
      "https://medium.com/@dawsoncontreras/use-react-to-make-tic-tac-toe-in-5-steps-17dd41394a52 ",
    smallDesc:
      "In this tutorial you will learn how to build Tic-Tac-Toe in React with functional Components and the useState hook. You will learn how to use .map() to render enumerable elements in React..., how to use the useState... ",
    blogText:
      "In this tutorial you will learn how to build Tic-Tac-Toe in React with functional Components and the useState hook. You will learn how to use .map() to render enumerable elements in React, how to use the useState hook, how to pass functions as props to components with destructuring, and ternary operators.",
  },
  {
    id: 1,
    title: "Leetcode 238: Product of Array Except Self Javascript solution",
    slug: "leetcode-238:-product-of-array-except-self-javascript-solution",
    postedOn: "May 28, 2022",
    author: "Dawson Contreras",
    blogImage: blogImage1,

    featured: true,
    linkSrc:
      "https://medium.com/@dawsoncontreras/leetcode-238-product-of-array-except-self-javascript-solution-ddebb724e4de",

    smallDesc:
      "Make 2 auxiliary arrays that make a left pass and right pass of the input array. These 2 arrays store the value of the cumulative product sum to the left or right of every point. Combining these ...",
    blogText:
      "Make 2 auxiliary arrays that make a left pass and right pass of the input array. These 2 arrays store the value of the cumulative product sum to the left or right of every point. Combining these arrays will be equivalent to the cumulative product sum of the array excluding the current index and achieving our goal.",
  },
];

export default posts;
