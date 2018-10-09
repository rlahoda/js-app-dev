// mail
//   inbox
//     important
//     newsletters
//     unread
//     junk
//   contacts

const email = {
  inbox: {
    messages: [
    {
      title: "hi",
      date: "10/1/18",
      from: "John Smith",
      message: "Hi, how are you?"
    },
    {
      title: "greetings",
      date: "10/2/18",
      from: "Steve McQueen",
      message: "Hello"
    }
    ],
    important: [{
      title: "hi",
      date: "10/1/18",
      from: "John Smith",
      message: "Hi, how are you?"
    },
    {
      title: "greetings",
      date: "10/2/18",
      from: "Steve McQueen",
      message: "Hello"
    }],
    newsletters: [{
      title: "hi",
      date: "10/1/18",
      from: "John Smith",
      message: "Hi, how are you?"
    },
    {
      title: "greetings",
      date: "10/2/18",
      from: "Steve McQueen",
      message: "Hello"
    }],
    unread: [{
      title: "hi",
      date: "10/1/18",
      from: "John Smith",
      message: "Hi, how are you?"
    },
    {
      title: "greetings",
      date: "10/2/18",
      from: "Amber Jones",
      message: "Hello"
    }],
    junk: [{
      title: "this is not a scam",
      date: "10/1/18",
      from: "Harold",
      message: "Hi, how are you?"
    },
    {
      title: "a business proposition for you",
      date: "10/2/18",
      from: "Esther",
      message: "Hello"
    }]
  },
  contacts :[
    {
      name: "Steve McQueen",
      address: "steve@me.com"
    },
    {
      name: "John Smith",
      address: "jsmith@me.com"
    },
    {
      name: "Amber Jones",
      address: "aj@me.com"
    },
    {
      name: "Erin Johnson",
      address: "erin.johnson.1@me.com"
    }]
};

console.log("List of inbox names: " + Object.keys(email.inbox));
let x = 0;
let messageList = [];
for (mailbox in email.inbox) {
  console.log(mailbox);
  // console.log(email.inbox[mailbox]);
  const currentMailbox = email.inbox[mailbox]

  for (var message of currentMailbox) {
    console.log(message.message);
    messageList.push(message.message);
  }
  // for (var i = 0; i < mailbox.length; i++) {
  // console.log(mailbox[i]);
  // }
  // x = 0;
}

console.log("List of emails: " + messageList);
