import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./App.css";

function App() {
  const [key, setKey] = useState("task1");
  const [string, setString] = useState("");
  const [cleanStr, setCleanStr] = useState("");
  const [alphabetStr, setAlphabetStr] = useState("");
  const [neededIndex, setNeededIndex] = useState("");

  // get string from input
  const getString = (input) => {
    setString(input);
    // console.log(string);
  };

  // response for button click, task 1
  const cleanedString = () => {
    setCleanStr(getCleanedString(string));
    // console.log(cleanStr);
  };

  // removing numbers from a string
  const getCleanedString = (str) => {
    return str.replace(/\d+/g, "");
    // another alternative str.match(/\D/g).join("");
  };

  // resonse for button click, task2
  const changedAlphabetLetters = () => {
    setAlphabetStr(getChangedAlphabetLetters(string));
    console.log(alphabetStr);
  };

  // change a letter with next 13th letter
  const getChangedAlphabetLetters = (str) => {
    let result = str.split("");

    for (let i = 0; i < result.length; i++) {
      let code = str.charCodeAt(i);

      // check if a uppercase letter
      if (code > 64 && code < 91) {
        if (code + 13 > 90) {
          let n = code + 13 - 90;
          result[i] = String.fromCharCode(64 + n);
        } else {
          result[i] = String.fromCharCode(code + 13);
        }
      }
      // check if a lowerscase letter
      else if (code > 96 && code < 123) {
        if (code + 13 > 122) {
          let n = code + 13 - 122;
          result[i] = String.fromCharCode(96 + n);
        } else {
          result[i] = String.fromCharCode(code + 13);
        }
      }
    }
    // console.log(result.join(""));
    return result.join("");
  };

  // response for button click, task3
  const findIndex = () => {
    setNeededIndex(getIndex(string));
    console.log(neededIndex);
  };

  // get an index
  const getIndex = (str) => {
    let strArray = str.split(",");
    strArray = strArray.map((n) => {
      return Number(n);
    });
    // console.log(strArray);
    let leftSum = 0;
    let rightSum = 0;
    let index;

    for (let i = 1; i < strArray.length - 1; i++) {
      for (let j = 0; j < strArray.length; j++) {
        if (j < i) leftSum = leftSum + strArray[j];
        if (j > i) rightSum = rightSum + strArray[j];
      }
      // console.log(leftSum, rightSum);
      if (leftSum == rightSum) {
        index = i;
        break;
      } else index = -1;
      leftSum = 0;
      rightSum = 0;
    }
    return index;
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Tabs
              id="controlled-tab"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="task1" title="Task-1">
                <h4>
                  Develop a function, that takes a string, removes all numeric
                  chars and returns the cleaned string. All other than numeric
                  chars (spaces, special chars !?,.+# and so on) should stay as
                  they are.
                </h4>
                <p>Examples:</p>
                <ul>
                  <li>cleanedString('?! 1234.') == '?! .'</li>
                  <li>cleanedString('0123456789') == ''</li>
                  <li>
                    cleanedString('Tha4nks for y0our he3lp!') == 'Thanks for
                    your help!'
                  </li>
                </ul>

                <Col md={4}>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Input string"
                      onChange={(e) => {
                        getString(e.target.value);
                      }}
                    />
                    <Button variant="btn btn-primary" onClick={cleanedString}>
                      Result
                    </Button>
                  </InputGroup>
                  <p>
                    Result: <span>{cleanStr}</span>
                  </p>
                </Col>
              </Tab>

              <Tab eventKey="task2" title="Task-2">
                <h4>
                  Develop a function, that takes in a string and replaces each
                  letter (a-z) with the letter 13 letters after it in the
                  alphabet. Numbers and special chars stay as they are.
                </h4>
                <p>Examples:</p>
                <ul>
                  <li> switch13("test") == "grfg"</li>
                  <li>switch13("Test") == "Grfg"</li>
                  <li> switch13("DEKRA") == "QRXEN"</li>
                </ul>
                <Col md={4}>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Input string"
                      onChange={(e) => {
                        getString(e.target.value);
                      }}
                    />
                    <Button
                      variant="btn btn-primary"
                      onClick={changedAlphabetLetters}
                    >
                      Result
                    </Button>
                  </InputGroup>
                  <p>
                    Result: <span>{alphabetStr}</span>
                  </p>
                </Col>
              </Tab>

              <Tab eventKey="task3" title="Task-3">
                <h4>
                  Develop a function, that takes in an array of numbers and
                  return the index, where the sum of the numbers to the left is
                  the same as the sum of the number to the right of the index.
                  If there is no such index, return -1.
                </h4>
                <p>Examples:</p> <p>getIndex([1,2,3,4,3,2,1]) == 3</p>
                <p>
                  // explanation: at index 3 (number 4) the sum of the numbers
                  to the left is 1 + 2 + 3 = 6, the sum of the numbers to the
                  right is 3 + 2 + 1 = 6
                </p>
                <p>getIndex([1,100,50,-51,1,1]) == 1</p>
                <p>
                  // explanation: at index 1 (number 100) the sum of the numbers
                  to the left is 1, the sum of the numbers to the right is 50 -
                  51 + 1 + 1 = 1
                </p>
                <Col md={4}>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Input string"
                      onChange={(e) => {
                        getString(e.target.value);
                      }}
                    />
                    <Button variant="btn btn-primary" onClick={findIndex}>
                      Result
                    </Button>
                  </InputGroup>
                  <p>
                    Result: <span>{neededIndex}</span>
                  </p>
                </Col>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
