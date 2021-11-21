import './App.css';
import Section from './components/Section/Section';
import Filter from './components/Filter/Filter';
import Form from './components/Form';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <Form />
      </Section>
      {/* {contacts.length > 0 && ( */}
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </Section>
      {/* )} */}
    </>
  );
}

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });
// export default connect(mapStateToProps, null)(App);
export default App;
