import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserAuth = () => {
  const [date, setDate] = useState(null);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
    email: '',
    petType: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and show error
    try {
      // Handle login form submission
      console.log('Login Data:', loginData);
      // Simulate error for demonstration
      throw new Error('Login failed! Please check your credentials.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and show error
    try {
      // Handle signup form submission
      console.log('Signup Data:', signupData);
      // Simulate error for demonstration
      throw new Error('Signup failed! Please try again later.');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vh] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold xl:text-6xl">Welcome</h1>
            </div>
            <p className="font-medium text-center">
              Welcome to P-Care. Please provide your details to log in.
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className='w-[400px]'>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='login'>Login</TabsTrigger>
                <TabsTrigger value='signup'>Signup</TabsTrigger>
              </TabsList>
              <TabsContent value='login'>
                <Card>
                  <form onSubmit={handleLoginSubmit}>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="login-username">Username</Label>
                        <Input
                          id="login-username"
                          name="username"
                          value={loginData.username}
                          onChange={handleLoginChange}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="login-password">Password</Label>
                        <Input
                          id="login-password"
                          name="password"
                          type="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit">Submit</Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              <TabsContent value='signup'>
                <Card>
                  <form onSubmit={handleSignupSubmit}>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="signup-username">Username</Label>
                        <Input
                          id="signup-username"
                          name="username"
                          value={signupData.username}
                          onChange={handleSignupChange}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input
                          id="signup-password"
                          name="password"
                          type="password"
                          value={signupData.password}
                          onChange={handleSignupChange}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={signupData.email}
                          onChange={handleSignupChange}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="pet-type">Select Pet Type</Label>
                        <Select
                          name="petType"
                          value={signupData.petType}
                          onValueChange={(value) => setSignupData(prevState => ({ ...prevState, petType: value }))}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a pet type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Dog">Dog</SelectItem>
                            <SelectItem value="Cat">Cat</SelectItem>
                            <SelectItem value="Bird">Bird</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="birthdate">Select Pet Birthdate</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit">Submit</Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
