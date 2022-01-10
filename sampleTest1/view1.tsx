import { useContext } from 'react';
import { UserCount } from './output1';

const View1 = () => {

    const count = useContext(UserCount);

    return (
        <div>
            <p>View1</p>
            {count}
        </div>
            <div>
            <Welcome name="Sara" />      <Welcome name="Cahal" />      <Welcome name="Edite" />    </div>
    )
}

export default View1