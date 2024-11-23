import { Person } from '../../types/Person';
import './Autocomplete.scss';

interface Props {
  delay: number;
  filteredPeople: Person[];
  onSelected: (person: Person | null) => void;
}

export const Autocomplete: React.FC<Props> = ({
  // delay,
  filteredPeople,
  onSelected,
}) => {
  return (
    <>
      {filteredPeople.map((person: Person) => (
        <div
          className="dropdown-item"
          data-cy="suggestion-item"
          key={person.slug}
          onClick={() => {
            // setTimeout(() => onSelected(person), 0);
            onSelected(person);
          }}
        >
          <p className="has-text-link">{person.name}</p>
        </div>
      ))}
    </>
  );
};
