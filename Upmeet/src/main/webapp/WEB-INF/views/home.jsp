
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<p>Hello worl!!d</p>

<p> ${ text } </p>

<p> ${ count } </p>

<c:forEach var="Event" items="${ events }">
				
					<p> ${Event.name} 
					${Event.description} </p>
			
				</c:forEach>
				
				<p> ${ events.name } ${ events.price }  </p>
					
</body>
</html>