import React, { useState } from 'react';
import PersonsTable from '../components/persons/PersonsTable';
import PersonFormModal from '../components/persons/PersonFormModal';
import { Person } from '../components/persons/PersonTypes';
import { personsData } from '../data/personData';

const PersonsPage: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>(personsData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingPerson, setEditingPerson] = useState<Person | null>(null); // Track person being edited

  const addPerson = (person: Person) => {
    setPersons([...persons, person]);
  };

  const updatePerson = (updatedPerson: Person) => {
    setPersons((prevPersons) =>
      prevPersons.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person,
      ),
    );
  };

  const deletePerson = (deletePerson: Person) => {
    const newPersons = persons.filter(
      (person) => person.id !== deletePerson.id,
    );
    setPersons(newPersons);
  };

  const editPerson = (person: Person) => {
    setEditingPerson(person);
    setModalOpen(true);
  };

  const handleSubmit = (person: Person) => {
    if (editingPerson) {
      updatePerson(person); // Edit mode
    } else {
      addPerson(person); // Create mode
    }
    setEditingPerson(null); // Clear editing state
    setModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-2">
        <h1 className="flex text-6xl ">Pretend Something Here</h1>
        <button
          className="flex mb-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setModalOpen(true)}
        >
          Add Person
        </button>
      </div>

      <PersonsTable
        persons={persons}
        onEdit={editPerson}
        onDelete={deletePerson}
      />
      {isModalOpen && (
        <PersonFormModal
          onClose={() => {
            setModalOpen(false);
            setEditingPerson(null);
          }}
          onSubmit={handleSubmit}
          defaultValues={editingPerson} // Pass default values for editing
        />
      )}
    </div>
  );
};

export default PersonsPage;
