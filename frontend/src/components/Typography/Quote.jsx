import React from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';

const StyledQuote = styled('blockquote')({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
  fontSize: "14px",
  padding: "10px 20px",
  margin: "0 0 20px",
  fontSize: "17.5px",
  borderLeft: "5px solid #eee"
});

const StyledQuoteText = styled('p')({
  margin: "0 0 10px",
  fontStyle: "italic"
});

const StyledQuoteAuthor = styled('small')({
  display: "block",
  fontSize: "80%",
  lineHeight: "1.42857143",
  color: "#777"
});

function Quote({ text, author }) {
  return (
    <StyledQuote>
      <StyledQuoteText>{text}</StyledQuoteText>
      <StyledQuoteAuthor>{author}</StyledQuoteAuthor>
    </StyledQuote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node
};

export default Quote;
