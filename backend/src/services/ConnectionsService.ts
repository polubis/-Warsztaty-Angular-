interface Connection {
  id: number;
  userId: number;
}

class ConnectionsService {
  public connections: Connection[] = [
    { id: 0, userId: 0 },
    { id: 1, userId: 0 },
    { id: 2, userId: 1 },
  ];

  public connect(userId: number): void {
    this.connections.push({
      id: this.connections.length - 1,
      userId,
    });
  }

  public disconnect(id: number): void {
    this.connections.filter((c) => c.id !== id);
  }
}

const connectionsService = new ConnectionsService();

export { connectionsService };
