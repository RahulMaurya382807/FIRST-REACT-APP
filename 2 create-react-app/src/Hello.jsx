function Hello() {
  
  let myName = 'Rahul';
  let fullName = () => {
    return 'Rahul';
  }

  return <h3>
    Hello this is the futue spealing.I am a Student {fullName()}
  </h3>
}

export default Hello;