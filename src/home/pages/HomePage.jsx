import { useAtom, useAtomValue } from 'jotai'
import { nameAtom } from '../../store'

export default function HomePage() {

  const [name, setName] = useAtom(nameAtom);
  //const name = useAtomValue();
  setName('Or');

  return (
    <>
        <p>Hello {name}</p>
    </>
  )
}