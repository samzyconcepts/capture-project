import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
// animation
import { LayoutGroup } from "framer-motion";

const FaqSection = () => {
    return (
        <Faq>
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <LayoutGroup>
                <Toggle title="How Do I Start">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Method">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What Products Do You Offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores.
                        </p>
                    </div>
                </Toggle>
            </LayoutGroup>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question {
        cursor: pointer;
        padding: 3rem 0;
    }
    .answer {
        padding: 2rem 0;
        p {
            padding: 1rem 0;
        }
    }
`;

export default FaqSection;
