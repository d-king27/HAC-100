import React from 'react';

class ProfileForm extends React.Component {
  render() {
    return (
      <div className='ProfileForm'>
        <form>
          <h1>Title</h1>
          <input type='checkbox' name='Auth-check' value="Facebook authentication keys?"/>
          <input type='text' name='lname'/>
          <input type='date' name='dob'/>
          <p>What relation was your loved one?</p>
          <select>
            <option value='husband'>Grandparent</option>
            <option value='parent'>Parent</option>
            <option value='friend'>Friend</option>
            <option value='partner'>Partner</option>
            <option value='child'>Child</option>
            <option value='sibling'>Sibling</option>
            <option value='uncle'>Uncle</option>
            <option value='auntie'>Auntie</option>
            <option value='nephew'>Nephew</option>
            <option value='niece'>Niece</option>
            <option value='cousin'>Cousin</option>
            <option value='pet'>Pet</option>
          </select>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default ProfileForm;