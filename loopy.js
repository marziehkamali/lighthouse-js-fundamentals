for (let i=100; i<=200; i++) {
  // multiple of 3
  if (i%3 == 0 && i % 4 == 0) {
    console.log("LoopyLighthouse");
  }
  else if (i % 3 == 0) {
    console.log("Loopy");
  }
  // multiple of 4
  else if (i % 4 == 0) {
    console.log("Lighthouse");

  } else {
    console.log(i);
  }
}

