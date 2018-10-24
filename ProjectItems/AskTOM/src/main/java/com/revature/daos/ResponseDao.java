package com.revature.daos;

import java.util.List;

import com.revature.beans.Response;

public interface ResponseDao {
	public Integer insertResponse(Response r);
	public List<Response> getAllResponse();
	public Response selectResponseById(Integer id);
	public Response updateResponseById(Response r);
	public void removeResponse(Integer id);
	public List<Response> getAllResponseByTopic(Integer id);
}
