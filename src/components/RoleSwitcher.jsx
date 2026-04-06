const RoleSwitcher = ({ role, setRole }) => {
  return (
    <select onChange={(e) => setRole(e.target.value)}>
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleSwitcher;