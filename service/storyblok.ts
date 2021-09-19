import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "kxrNv8UYIk3s1xSPa5I9qQtt", //TODO: replace with your access token
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;
