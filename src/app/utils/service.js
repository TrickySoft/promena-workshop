export const handleFilesUploadStates = (event) => {
  const details = {
    progress: 0,
    isLoaded: false,
    isError: false,
    isAborted: false
  };

  if (event) {
    if (event.type === 'progress') {
      details.progress = (event.loaded / event.total) * 100;
    } else if (event?.success || event.type === 'load') {
      details.progress = 100;
      details.isLoaded = true;
    } else if (event.type === 'error') {
      details.isError = true;
    } else if (event.type === 'abort') {
      details.isAborted = true;
    }
  }

  return details;
};

export const handleNameConvertion = (name) => {
  let avatarLetter = null;
  const splittedName = name && name.split(' ');
  if (splittedName && splittedName.length) {
    avatarLetter = splittedName[0].length && splittedName[0][0].toUpperCase();
    if (splittedName[1] && splittedName[1].length) {
      avatarLetter += splittedName[1][0].toUpperCase();
    }
  }
  return avatarLetter;
};