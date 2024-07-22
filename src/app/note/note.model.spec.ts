import { Note } from './note.model';

describe('Note', () => {
  it('should create an object that conforms to the note interface', () => {
    const note:Note = { id: '1', content: 'Test Note', createdAt: new Date(), updatedAt: new Date() };
    expect(note).toBeTruthy(); // Vérifie que l'objet est défini
    expect(note.id).toBe('1'); // Vérifie que l'identifiant est correct
    expect(note.content).toBe('Test Note'); // Vérifie que le contenu est correct
    expect(note.createdAt).toBeTruthy();
  });
});
