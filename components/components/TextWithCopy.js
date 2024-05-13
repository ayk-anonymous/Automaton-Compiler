import { useClipboard } from "@chakra-ui/hooks";
import { Text, useToast } from "@chakra-ui/react";

export function TextWithCopy({ children }) {
  const { hasCopied, onCopy } = useClipboard(children);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Copied!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Text onClick={handleCopy}>
      {children}
    </Text>
  );
}
