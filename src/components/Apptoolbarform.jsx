import { Button } from '@material-ui/core';
import React, { useState } from 'react';

export default function Apptoolbarform(newadd) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const soumettre = (e) => {
    e.preventDefault();
    if (!title || !note) return;
    newadd.add(title, note, []);
    setTitle('');
    setNote('');
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
