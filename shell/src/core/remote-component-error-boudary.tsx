import React, { Component, ReactNode } from 'react';

class RemoteComponentErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true }; // Update state so the next render shows the fallback UI
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error loading remote component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, there was an issue loading this component.</div>;
    }

    return this.props.children;
  }
}

export default RemoteComponentErrorBoundary;
