const withLoader = (Component, hook) => {
  return (props) => {
    const { data, isLoading, isError, error } = hook();
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>Errorrrrr {error.status}</div>;
    }

    return <Component {...props} data={data} />;
  };
};

export default withLoader;
