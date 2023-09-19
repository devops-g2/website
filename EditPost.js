const fetchPost = async () => {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };
