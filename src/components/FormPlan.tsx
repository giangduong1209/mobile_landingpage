"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";

const FormPlan = () => {
  const form = useForm();
  function onSubmit(data: any) {
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div className="mt-10 mb-14 mx-2 md:mx-[100px] lg:mx-[350px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormProvider {...form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ và tên:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Họ và tên"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SDT liên hệ:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="SDT liên hệ"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_sim"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SDT cần gắn:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="SDT cần gắn"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gói cần gắn:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Gói cần gắn"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Gói cần gắn:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="50gb" id="option-one" />
                        </FormControl>
                        <FormLabel htmlFor="option-one">50gb</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="100gb" id="option-two" />
                        </FormControl>
                        <FormLabel htmlFor="option-two">100gb</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="150gb" id="option-three" />
                        </FormControl>
                        <FormLabel htmlFor="option-three">150gb</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="200gb" id="option-four" />
                        </FormControl>
                        <FormLabel htmlFor="option-four">200gb</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="freeCall" id="option-five" />
                        </FormControl>
                        <FormLabel htmlFor="option-five">Free gọi</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            /> */}
          </FormProvider>
          <Button type="submit">Đăng ký</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormPlan;
