import { Box, Divider, Typography } from "@mui/material";

type Content = {
  heading?: string;
  body: string;
};

const PageContent: Content[] = [
  {
    heading: "Preserving Your Legacy, Sharing Your Love",
    body: "Life is unpredictable, and sometimes, words left unsaid become lasting regrets. afterglow is here to ensure your thoughts, feelings, and cherished memories find their way to your loved ones, no matter what life brings.",
  },
  {
    heading: "What Is afterglow?",
    body: "afterglow is a digital legacy platform designed to help you leave behind meaningful messages, documents, and media for your loved ones. It's more than just a storage solution — it's a bridge to connect your emotions and intentions with those who matter most, even in your absence",
  },
  {
    heading: "How It Works",
    body: "Creating your account is the first step in your journey to preserving your legacy. When you sign up for an afterglow account, you begin the process of ensuring your most important thoughts and memories will be shared with your loved ones. This initial step is about taking control of your personal narrative and preparing a meaningful connection for the future.",
  },
  {
    body: "Adding your files comes next, allowing you to upload documents, photos, videos, and other media that hold special significance. Whether it's a heartfelt letter, a cherished family video, or important documents, afterglow provides a secure platform to store these precious memories. Each file you upload becomes a potential message of love, guidance, or remembrance.",
  },
  {
    body: "Setting your timer is a crucial aspect of the afterglow experience. You'll define check-in intervals that keep everything under your control. If you miss logging in for a specified period, a countdown timer will begin, adding an extra layer of security and intentionality to your legacy preservation.",
  },
  {
    body: "Delivering to loved ones is the final and most meaningful step. If the timer runs out, your pre-set messages and files will be delivered to your chosen recipients via email or other methods. This ensures that your voice, intentions, and most cherished memories will be carried forward, providing comfort, guidance, and connection even in your absence.",
  },
  {
    heading: "Why choose afterglow?",
    body: "Peace of Mind ensures that your loved ones will hear your thoughts and feelings, even if you're no longer there. You can rest assured that your most important messages and memories will be preserved and shared when it matters most.",
  },
  {
    body: "Security and Privacy are at the core of afterglow's design. We use state-of-the-art security measures to protect your data, ensuring it's only shared with those you trust. Your personal and emotional legacy remains safe and confidential until the moment you've predetermined.",
  },
  {
    body: "Versatile Formats make afterglow adaptable to your unique needs. From PDF documents to multimedia files, our platform supports a wide variety of file types. This flexibility allows you to capture and preserve your memories exactly how you want them, in the formats that mean the most to you.",
  },
  {
    heading: "A Message That Lasts",
    body: "afterglow isn't just about preparing for the unexpected — it's about embracing the power of words and memories to inspire, comfort, and guide those you love. Let your legacy shine through with afterglow.",
  },
];

export default function About(): JSX.Element {
  return (
    <Box textAlign={"center"}>
      <Typography
        fontSize={"40px"}
        fontWeight={700}
        letterSpacing={"2px"}
        marginBottom={2}
      >
        About afterglow
      </Typography>
      <Divider variant="middle" sx={{ borderColor: "#B0B0B0" }} />
      {PageContent.map((item: Content, index: number) => (
        <Box key={index} marginY={4}>
          <Typography fontSize={"24px"} fontWeight={500}>
            {item.heading}
          </Typography>
          <Typography fontSize={"16px"}>{item.body}</Typography>
        </Box>
      ))}
    </Box>
  );
}
