type GreetingProps = {
  person: {
    firstName: string;
    lastName: string;
  },
  children: React.ReactNode;
};

function Greeting(props: GreetingProps) {
  const { person, children } = props;

  const firstName = person.firstName;
  const lastName = person.lastName;

  return (
    <h1 className="greeting">
      Olá {`${firstName} ${lastName}`}
      <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
      {children}
    </h1>
  );
}

export default Greeting;
