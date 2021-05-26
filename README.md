# Mastergy: Frontend
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment
### `ssh` into aws ec2 instance
```bash
ssh -i "pilotfrontend.pem" ubuntu@ec2-65-0-112-72.ap-south-1.compute.amazonaws.com
```

### Move into the repository
```bash
cd frontend
```

### Pull the latest commits
```bash
git pull origin main
```

### Create new build
```bash
npm run build
```

### Restart `nginx`
```bash
sudo systemctl restart nginx
```
