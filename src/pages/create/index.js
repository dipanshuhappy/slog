// import "./write.module.css";

// import MarkdownTextarea from "react-markdown-textarea";
import { addDoc, collection } from "firebase/firestore";
import {
  Button,
  Text,
  useColorMode,
  Box,
  Textarea,
  Radio,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useWallet } from "@solana/wallet-adapter-react";
import { db } from "../../f";
import { useRouter } from "next/router";

const markDownTheme = {
  p: (props) => {
    const { children } = props;
    return (
      <Text mb={2} fontSize={"12px"}>
        {children}
      </Text>
    );
  },
};
export default function Write() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("1");
  const router = useRouter();
  const wallet = useWallet();
  const getContent = () => {
    if (value == "1") {
      return (
        <>
          <div className="writeFormGroup">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <Textarea
              value={content}
              width="70vw"
              textColor={colorMode == "dark" ? "white" : "black"}
              height={"40vh"}
              onChange={(e) => setContent(e.target.value)}
              className="writeInput writeText"
              placeholder="Write  your stories in markdown..."
              type="text"
              autoFocus={true}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <label for="images" class="drop-container">
            <span class="drop-title">Drop files here</span>
            or
            <input type="file" id="images" accept="image/*" required />
          </label>
        </>
      );
    }
  };
  const publish = async () => {
    console.log({ wallet });
    if (wallet) {
      try {
        const docRef = await addDoc(collection(db, "blogs"), {
          author: wallet.publicKey.toString(),
          title: title,
          content: content,
        });
        router.push("/");
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      return;
    }

    alert("Please connect wallet");
    return;
  };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1">Blog</Radio>
            <Radio value="2">Patents</Radio>
            <Radio value="3">Copyright</Radio>
          </Stack>
        </RadioGroup>
        {getContent()}

        {/* <MarkdownTextarea /> */}
        <div
          style={{
            color: colorMode == "dark" ? "white" : "black",
            width: "70%",
            textAlign: "initial",
          }}
        >
          <Text as="b" textAlign={"left"}>
            Review Blog Content
          </Text>
          <Box
            boxShadow={"2xl"}
            borderColor={"teal"}
            borderRadius="xl"
            border={"1px"}
            padding="16"
          >
            <ReactMarkdown
              skipHtml={false}
              className=""
              components={ChakraUIRenderer()}
              children={content}
              remarkPlugins={[remarkGfm]}
            />
          </Box>
        </div>
        <Button onClick={publish} margin={"8"} colorScheme={"teal"}>
          Publish
        </Button>
      </form>
    </div>
  );
}
