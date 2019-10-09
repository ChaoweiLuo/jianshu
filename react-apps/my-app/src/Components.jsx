import React from 'react';

export function About () {
  return (
    <div>
      About
    </div>
  );
}

export function Home () {
  return (
    <div>Home</div>
  );
}

export function Test ({match}) {
  return (
    <div>
      {JSON.stringify(match)}
    </div>
  )
}
