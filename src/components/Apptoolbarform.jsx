import { Button } from '@material-ui/core';
import React, { useState } from 'react';

export default function Apptoolbarform(newadd) {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const soumettre = (e) => {
    e.preventDefault();
    if (!type || !title || !note) return;
    newadd.postits(type, title, note, []);
    setType('');
    setTitle('');
    setNote('');
  };

  const changetype = (e) => {
    setType(e.target.value);
  };

  const changetitle = (e) => {
    setTitle(e.target.value);
  };

  const changenote = (e) => {
    setNote(e.target.value);
  };

  return (
    <form className="add-form" onSubmit={soumettre}>
      <input
        type="text"
        placeholder="Type"
        value={type}
        name="type"
        onChange={changetype}
      />
      <input
        type="text"
        placeholder="Titre"
        value={title}
        name="title"
        onChange={changetitle}
      />
      <input
        type="text"
        placeholder="Note"
        value={note}
        name="note"
        onChange={changenote}
      />
      <Button type="submit" className="add-button">Ajouter</Button>
    </form>
  );
}
